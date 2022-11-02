import React, { useContext } from 'react';
import { toast } from 'react-toastify';
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

export default function ModifyProduct({ data, modalState, setModalState, t }) {
    const { state, dispatch } = useContext(Store);
    const {
        selectedProduct,
        quote: { quoteItems }
    } = state;

    const handleModifyProduct = (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        let dataArr = [];

        for (let pair of data.entries()) {
            dataArr.push([pair[0], pair[1]]);
        }

        dispatch({
            type: 'UPDATE_PRODUCT',
            payload: {
                key: modalState.product.key,
                product: state.selectedProduct,
                ...dataArr.reduce((accumulator, value) => {
                    return { ...accumulator, [value[0]]: value[1] };
                }, {}),
                translation_key: state.selectedProduct
            }
        });

        toast.success(
            <div>
                {t(`common:${state.selectedProduct}`)} {t('modifieditem')}
            </div>,
            {}
        );
        setModalState({ state: false, product: null });
        return false;
    };

    function handleProduct() {
        switch (data.translation_key) {
            case t('product.tamplariepvc'):
                return <TamplariePVC handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.tamplariealuminiu'):
                return <TamplarieAluminiu handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.tamplarielemn'):
                return <TamplarieLemn handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.balustrada'):
                return <Balustrada handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.rulouexterior'):
                return <RulouExterior handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.pergola'):
                return <Pergola handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.copertina'):
                return <Copertina handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.panelornamental'):
                return <PanelOrnamental handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.usagaraj'):
                return <UsaGaraj handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.roletatextila'):
                return <RoletaTextila handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.sticla'):
                return <Sticla handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.peretecortina'):
                return <PereteCortina handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.usaantifoc'):
                return <UsaAntifoc handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.plasainsecte'):
                return <PlasaInsecte handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;
            case t('product.pereteantivant'):
                return <PereteAntivant handleModifyProduct={handleModifyProduct} modifying={true} t={t} />;

            default:
                break;
        }
    }

    return handleProduct();
}
