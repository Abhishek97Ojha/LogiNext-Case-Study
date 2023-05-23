import React, {useState} from "react";
import "./card.css";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import FormDialog from "../Dialog/Dialog";
import DelDialog from "../DelDialog/DelDialog"

const Card = ({username, name, email, phone, website, id, getId,delItem,address, company}) => {
  const [isOpen,setIsOpen] = useState(false); //Edit popup
  const [isDelOpen,setIsDelOpen] =useState(false); // Delete popup
  const [like, setLike] = useState(false)
  return (
    <div className="card">
      <div className="card-top">
        <img  src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} alt="#" />
      </div>
      <div className="card-middle">
        <ul>
          <li className="card-name">{name}</li>
          <li><MailOutlineIcon style={{fontSize : '.9rem', color: 'rgba(0, 0, 0, 0.651)', marginRight : '.25rem'}}/>{email}</li>
          <li><PhoneEnabledIcon style={{fontSize : '.9rem', color: 'rgba(0, 0, 0, 0.651)', marginRight : '.25rem'}}/>{phone}</li>
          <li><LanguageIcon style={{fontSize : '.9rem', color: 'rgba(0, 0, 0, 0.651)', marginRight : '.25rem'}}/>https://{website}</li>
          <li><HomeIcon style={{fontSize : '.9rem', color: 'rgba(0, 0, 0, 0.651)', marginRight : '.25rem'}}/>{address.city}</li>
          <li><BusinessIcon style={{fontSize : '.9rem', color: 'rgba(0, 0, 0, 0.651)', marginRight : '.25rem'}}/>{company.name}</li>
        </ul>
      </div>
      <div className="card-bottom">
        <FavoriteBorderIcon style={{fontSize : '1.15rem', color: like ? 'red' :'rgba(0, 0, 0, 0.651)'}}  onClick={()=>{
          setLike(!like)
        }}/>
        <div className="vertical-line"></div>
        <BorderColorIcon style={{fontSize : '1.15rem', color: 'rgba(0, 0, 0, 0.651)'}} onClick={()=>{
          getId(id)
          setIsOpen(true);
        }}/>

        <div className="vertical-line"></div>
        <DeleteIcon style={{fontSize : '1.15rem', color: 'rgba(0, 0, 0, 0.651)'}} onClick={()=>{
          setIsDelOpen(true)
        }}/>
      </div>
      {isDelOpen===true && <DelDialog check={true} setIsDelOpen={setIsDelOpen} name={name} delItem={delItem} id={id}/>}
      {isOpen===true && <FormDialog check={true} setIsOpen={setIsOpen} name={name} email={email} phone={phone} website={website} id={id} username={username}  address={address} company={company}/>}
    </div>
  );
};

export default Card;
