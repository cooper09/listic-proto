import React,{useContext,useState} from 'react'
import { StoreContext } from '../../store/StoreContext';
import styled from 'styled-components';

const DropdownDiv = styled.div`
            .dropdown {
                position: relative;
                color: #333;
                cursor: default;
            }
            
            .dropdown .arrow {
                border-color: #999 transparent transparent;
                border-style: solid;
                border-width: 5px 5px 0;
                content: " ";
                display: block;
                height: 0;
                margin-top: 0.3rem;
                position: absolute;
                right: 10px;
                top: 14px;
                width: 0;
            }
            
            .dropdown .arrow.open {
                border-color: transparent transparent #999;
                border-width: 0 5px 5px;
            }
            
            .dropdown .selected-value {
                line-height: 1.5;
                font-size: 1rem;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 2px;
                box-sizing: border-box;
                cursor: default;
                outline: none;
                padding: 8px 52px 8px 10px;
                transition: all 200ms ease;
                width: 100%;
            }
            
            .dropdown .options {
                display: none;
                background-color: #fff;
                border: 1px solid #ccc;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
                box-sizing: border-box;
                margin-top: -1px;
                max-height: 200px;
                overflow-y: auto;
                position: absolute;
                top: 100%;
                width: 100%;
                z-index: 1000;
                -webkit-overflow-scrolling: touch;
            }
            
            .dropdown .options.open {
                display: block;
            }
            
            .dropdown .option {
                box-sizing: border-box;
                color: rgba(51, 51, 51, 0.8);
                cursor: pointer;
                display: block;
                padding: 8px 10px;
            }
            
            .dropdown .option.selected,
            .dropdown .option:hover {
                background-color: #f2f9fc;
                color: #333;
            }
  
    `;


const Dropdown = ({value, onChange}) => {
    const { state, actions } = useContext(StoreContext);;
    const myAction = () => {console.log("Make selection...")} //actions.requestChangeName('data');

    console.log("Contacts - state contacts: ", state.contacts )
    let contacts = state.contacts;

    const [open, setOpen] = useState(false)
    
    return (
        <>
            <DropdownDiv>
            <div className="dropdown">
                <div className="control" onClick={()=>setOpen((prev) => !prev)}>
                    <div className="selected-value">Select item...</div>
                    <div className={`arrow ${open ? "open" : null}`} />
                </div>
                <div className={`options ${open ? "open" : null}`}>
                {
                    contacts.map(contact  => 
                        <div className="option"
                        onClick={()=> {
                            onChange(contact);
                            setOpen(false)
                        }}
                        key={contact.id}
                        >{contact.name}</div>
                    )
                }
                </div>
            </div>
            </DropdownDiv>
       </>
    )
}//end Dropdown

export default Dropdown;
