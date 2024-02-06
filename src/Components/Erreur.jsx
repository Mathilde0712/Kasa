import { NavLink } from 'react-router-dom';

const Erreur = () => {
    return (
        <div className='erreur-content'>
            <p className='error-title'>404</p>
            <p className='error-subtitle'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" >
                    <p className='error-text'>Retourner sur la page d'accueil </p>
                </NavLink>
        </div>
    );
};

export default Erreur;