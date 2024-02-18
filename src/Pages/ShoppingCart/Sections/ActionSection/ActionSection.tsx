import React, { useState } from 'react';
import './actionSection.scss';
import { ButtonComponent, InputComponent } from '../../../../Components';
import { getTodayDate } from '../../../../Util';

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface Props {
  buyItems: any;
  disabled?: boolean; 
}

const ActionSection = ({ buyItems, disabled }: Props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ date: getTodayDate()});

  const handleInputChange = ({ target }: any) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  
  const handleBuyConfirm= () => {
    Swal.fire({
      title: "Comprado!",
      text: "La compra fue realizada con éxito",
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
      }
    });
  };

  const handleBuy = () => {
    Swal.fire({
      title: "¿Desea comprar estos articulos?",
      text: "¡No podrás revertir esto!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        handleBuyConfirm();
        buyItems(data?.date);
      }
    });
  };

  return (
    <section>
      <div className='s_action__date'>
        <InputComponent
          label="Fecha"
          name="date"
          type="date"
          value={data.date}
          onChange={handleInputChange}
        />
      </div>
      <div className='s_action__btn'>
        <ButtonComponent name='Comprar' onClick={handleBuy} disabled={disabled} />
      </div>
    </section>
  )
}

export default ActionSection;