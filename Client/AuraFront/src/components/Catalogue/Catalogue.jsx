import { useState } from 'react'
import './catalogue.css'
import Card from '../Card/Card'

function Catalogue() {
    const [category_product, setCategory_product] = useState('');

    const handleCategoryClick = (category) => {
        if (category_product === category) {
            setCategory_product(''); 
        } else {
            setCategory_product(category); 
        }
    };

    return (
        <div className="catalogue-main-container">
            <div className="catalogue-body">
                <section className='filters-container'>
                    <h2 id="filters-title" className="filters-title">GALERÍA</h2>
                    <div className='categories-buttons-container'>
                        <button className={`categories-buttons ${category_product === 'arte abstracto' ? 'selected' : ''}`} onClick={() => handleCategoryClick('arte abstracto')}>Arte<br></br>Abstracto</button>
                        <button className={`categories-buttons ${category_product === 'realismo contemporáneo' ? 'selected' : ''}`} onClick={() => handleCategoryClick('realismo contemporáneo')}>Realismo<br></br>Contemporáneo</button>
                        <button className={`categories-buttons ${category_product === 'expresionismo' ? 'selected' : ''}`} onClick={() => handleCategoryClick('expresionismo')}>Expresionismo</button>
                        <button className={`categories-buttons ${category_product === 'arte digital' ? 'selected' : ''}`} onClick={() => handleCategoryClick('arte digital')}>Arte<br></br>Digital</button>
                        <button className={`categories-buttons ${category_product === 'neo-pop' ? 'selected' : ''}`} onClick={() => handleCategoryClick('neo-pop')}>Neo-Pop</button>
                    </div>
                </section>
                <section className="artwork-container">
                    <Card category_product={category_product} /> 
                </section>
            </div>
        </div>
    );
}

export default Catalogue