import React, { useContext } from 'react';
import { Store } from '../../utils/StateProvider';
import {
    TamplariePVC,
    TamplarieAluminiu,
    TamplarieLemn,
    Balustrada,
    RulouExterior,
    Pergola,
    Copertina,
    PanelOrnamental,
    UsaGaraj,
    RoletaTextila,
    Sticla,
    PereteCortina,
    UsaAntifoc,
    PlasaInsecte,
    PereteAntivant
} from './products';

export default function ProductRequirements({ selectedProduct, t }) {
    const { state, dispatch } = useContext(Store);

    const handleAddProduct = (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        let dataArr = [];

        for (let pair of data.entries()) {
            dataArr.push([pair[0], pair[1]]);
        }

        dispatch({
            type: 'ADD_PRODUCT',
            payload: {
                key: state.quote.quoteItems.length,
                ...dataArr.reduce((accumulator, value) => {
                    return { ...accumulator, [value[0]]: value[1] };
                }, {}),
                translation_key: state.selectedProduct
            }
        });

        document.querySelector('#quote-details').scrollIntoView();
        return false;
    };

    function handleProduct() {
        switch (selectedProduct) {
            case t('product.tamplariepvc'):
                return <TamplariePVC handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.tamplariealuminiu'):
                return <TamplarieAluminiu handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.tamplarielemn'):
                return <TamplarieLemn handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.balustrada'):
                return <Balustrada handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.rulouexterior'):
                return <RulouExterior handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.pergola'):
                return <Pergola handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.copertina'):
                return <Copertina handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.panelornamental'):
                return <PanelOrnamental handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.usagaraj'):
                return <UsaGaraj handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.roletatextila'):
                return <RoletaTextila handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.sticla'):
                return <Sticla handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.peretecortina'):
                return <PereteCortina handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.usaantifoc'):
                return <UsaAntifoc handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.plasainsecte'):
                return <PlasaInsecte handleAddProduct={handleAddProduct} modifying={false} t={t} />;
            case t('product.pereteantivant'):
                return <PereteAntivant handleAddProduct={handleAddProduct} modifying={false} t={t} />;

            default:
                break;
        }
    }

    return (
        <section>
            {selectedProduct && (
                <section className="card">
                    <h2 className="text-2xl">{t(`common:${selectedProduct}`)}</h2>

                    <div className="border-b my-4" />

                    {handleProduct()}
                </section>
            )}
        </section>
    );
}
