import { styled } from "styled-components"

export const ContactListStyle = styled.ul`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 15px 50px;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
`
export const ContactListItem = styled.li`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    padding: 10px 0;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    font-weight: 600;
`
export const ContactItemText = styled.p`
    font-size: 18px;
    font-weight: 500;

`

export const DeleteBtn = styled.button`
    width: 65px;
    padding: 4px;
    font-size: 14px;
    font-weight: 500;
    background: rgba(223, 125, 125, 0.5);
    color: #801919;
    cursor: pointer;
    border-radius: 7px;
    border: #0004ff;
`