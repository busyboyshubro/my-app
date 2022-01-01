import React,{useState ,useEffect} from "react";

const  Products  = () => {
    const [product,setProduct] = useState([])
    
    useEffect(()=>{
        getData();
    },[])

    const url = 'https://fakestoreapi.com/products';
    const getData = async () =>{
        const res = await fetch(url);
        const listProduct = await res.json();
        console.log(listProduct)
        setProduct(listProduct)
    }
    
  return (
    <div>
      <div className="featured-page">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>Featured Items</h1>
              </div>
            </div>
            {/* <div className="col-md-8 col-sm-12">
              <div id="filters" className="button-group">
                <button className="btn btn-primary" data-filter="*">
                  All Products
                </button>
                <button className="btn btn-primary" data-filter=".new">
                  Newest
                </button>
                <button className="btn btn-primary" data-filter=".low">
                  Low Price
                </button>
                <button className="btn btn-primary" data-filter=".high">
                  Hight Price
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="featured container no-gutter">
        <div className="row posts">
            {product && product.map( data =>{
                return(
                    <div id={data.id} className="item new col-md-4">
                    <a href="#">
                      <div className="featured-item">
                        <img src={data.image} alt={data.title} />
                        <h4>{data.title}</h4>
                        <h6>${data.price}</h6>
                      </div>
                    </a>
                  </div>
                )
            })}
         
        </div>
      </div>

      {/* <div className="page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li className="current-page">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Products;
