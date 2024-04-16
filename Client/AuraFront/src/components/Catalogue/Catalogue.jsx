import { useState } from 'react';
import './catalogue.css';
import Card from '../Card/Card';

function Catalogue() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(''); 
        } else {
            setSelectedCategory(category); 
        }
    };


    return (
        <div className="catalogue-main-container">
            
            <div className="catalogue-body">
               
                <section className='filters-container'>
                  
                    <h2 id="filters-title" className="filters-title">GALERÍA</h2>

                   
                    <div className='categories-buttons-container'>
                        <button className={`categories-buttons ${selectedCategory === 'ArteAbstracto' ? 'selected' : ''}`} onClick={() => handleCategoryClick('ArteAbstracto')}>Arte Abstracto</button>
                        <button className={`categories-buttons ${selectedCategory === 'RealismoContemporaneo' ? 'selected' : ''}`} onClick={() => handleCategoryClick('RealismoContemporaneo')}>Realismo Contemporáneo</button>
                        <button className={`categories-buttons ${selectedCategory === 'expresionismo' ? 'selected' : ''}`} onClick={() => handleCategoryClick('expresionismo')}>Expresionismo</button>
                        <button className={`categories-buttons ${selectedCategory === 'ArteDigital' ? 'selected' : ''}`} onClick={() => handleCategoryClick('ArteDigital')}>Arte Digital</button>
                        <button className={`categories-buttons ${selectedCategory === 'NeoPop' ? 'selected' : ''}`} onClick={() => handleCategoryClick('NeoPop')}>Neo-Pop</button>
                    </div>

                  
                </section>

               
                <section>
                    <Card selectedCategory={selectedCategory} />
                </section>
            </div>
        </div>
    );
}

export default Catalogue;