//import images
import product1 from "../assets/images/p1.jpg"
//Create Product Component
function Product()
{
  return(
    <div className="product__container">
      <div className="box">
        <img src={product1} alt="Perfumy-img" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique reiciendis accusantium libero veritatis consequatur veniam asperiores blanditiis officiis quaerat optio?</p>
      </div>

      <div className="box">
        <img src={product1} alt="Perfumy-img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur nobis ex accusamus ad iusto id quis magni dicta modi.</p>
      </div>

      <div className="box">
        <img src={product1} alt="Perfumy-img" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus itaque, numquam fugiat mollitia odit provident inventore pariatur quis in! Numquam?</p>
      </div>
    </div>)
}

export default Product