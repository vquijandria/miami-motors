import { useState } from 'react';
import Select from 'react-select';
//import "./FormularioAutos.css";

const FormAutos = () => {
    {
        const [year, setYear] = useState('');
        const [brand, setBrand] = useState('');
        const [model, setModel] = useState('');
      
        const yearOptions = [
          { value: '2023', label: '2023' },
          { value: '2022', label: '2022' },
          { value: '2021', label: '2021' },
          // Agrega más años si es necesario
        ];
      
        const brandOptions = [
          { value: 'toyota', label: 'Toyota' },
          { value: 'honda', label: 'Honda' },
          // Agrega más marcas si es necesario
        ];
      
        const modelOptions = [
          { value: 'corolla', label: 'Corolla', brand: 'toyota' },
          { value: 'camry', label: 'Camry', brand: 'toyota' },
          { value: 'accord', label: 'Accord', brand: 'honda' },
          // Agrega más modelos y asigna la marca correspondiente
        ];
      
        const filteredModelOptions = modelOptions.filter((option) => option.brand === brand);
      
        const handleSubmit = () => {
          // Lógica para manejar el envío del formulario
          // Puedes enviar los datos a un servidor aquí
          console.log('Año:', year);
          console.log('Marca:', brand);
          console.log('Modelo:', model);
        };

        
        return (
          <div>
            <label>Año:</label>
            <Select options={yearOptions} onChange={(selectedOption) => selectedOption && setYear(selectedOption.value)} />

      
            <label>Marca:</label>
            <Select options={brandOptions} onChange={(selectedOption) => selectedOption && setBrand(selectedOption?.value)} />
      
            <label>Modelo:</label>
            <Select options={filteredModelOptions} onChange={(selectedOption) => selectedOption && setModel(selectedOption?.value)} />
      
            <button onClick={handleSubmit}>Enviar</button>
          </div>
        );
      }
};

export default FormAutos;