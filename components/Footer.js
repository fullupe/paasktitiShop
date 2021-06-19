import FooterItem from "./FooterItem"
import PowerIcon from '@material-ui/icons/Power';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();
    return (
        <div className="flex flex-grow mt-20 justify-evenly pt-6  items-center" >
        
        <FooterItem className="animate-bounce" title="Electricals" url={<PowerIcon onClick={()=>router.push('/producsCategoryElectrical')}/>}/>
        <FooterItem className="animate-bounce" title="Fashion" url={<StorefrontIcon onClick={()=>router.push('/productsCategoryFashion')}/>}/>
        <FooterItem className="animate-bounce" title="Phone's" url={<PhoneIphoneIcon onClick={()=>router.push('/productsCategoryPhone')}/>}/>
        

        </div>
    )
}

export default Footer
