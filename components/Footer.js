import FooterItem from "./FooterItem"

function Footer() {
    return (
        <div className="flex flex-grow mt-20 justify-evenly pt-6  items-center" >
        <FooterItem title="Names" url="https://res.cloudinary.com/fullupe/image/upload/v1621214394/YOUTUB-J-E-G/tab-2_qp1t5s.png"/>
          <FooterItem title="Blanding" url="https://res.cloudinary.com/fullupe/image/upload/v1621214393/YOUTUB-J-E-G/tab-1_t4ktgz.png" />
          <FooterItem title="3D Design" url="https://res.cloudinary.com/fullupe/image/upload/v1621214393/YOUTUB-J-E-G/tab-3_dh2ykr.png" />

        </div>
    )
}

export default Footer
