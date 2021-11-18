import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//styled
const CarItemContainer = styled.div``;
const Product = styled.div``;
const Carr = ({name}) => {
    return (
        <>
            <CarItemContainer>
                <Product><p>{name}</p> </Product>
            </CarItemContainer>
        </>
    )
}

Carr.propTypes = {
    name: PropTypes.string,
}

export default Carr
