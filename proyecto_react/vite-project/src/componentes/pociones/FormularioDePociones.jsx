import { useState } from 'react';

const FormularioDePociones = ({ agregarPocion }) => {
    const [nuevaPocion, setNuevaPocion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaPocion.trim() !== '') {
            // Llama a la función agregarPocion pasando la nueva poción
            agregarPocion(nuevaPocion);
            // Limpia el estado del input después de agregar la poción
            setNuevaPocion('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input controlado para ingresar el nombre de la nueva poción */}
            <input
                type="text"
                value={nuevaPocion}
                onChange={(e) => setNuevaPocion(e.target.value)}
                placeholder="Nueva Poción"
            />
            {/* Botón para enviar el formulario y agregar la poción */}
            <button type="submit">Agregar</button>
        </form>
    );
};

export default FormularioDePociones;
