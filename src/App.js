import './App.css';

import {FaCheck} from "react-icons/fa";

function App() {
  const details= 
  [
    {
      plan_name:"FREE",
      price:"0",
      features:["Single User","5GB Storage","Unlimited Public Projects","Community Access"],
      features_unavailable:["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
    },
    {
      plan_name:"PLUS",
      price:"9",
      features:["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
      features_unavailable:[]
    },
    {
      plan_name:"PRO",
      price:"49",
      features:["Unlimited Users","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Unlimited Free Subdomains","Monthly Status Reports"],
      features_unavailable:[]
    }
  ];
  return (
    <section>
    <div className="table_container">
      
    {details.map((pr)=>
      <PricingTable plan_name={pr.plan_name} price={pr.price} features={pr.features} features_unavailable={pr.features_unavailable} />
    

    )}
    </div>
      
    </section>   
    
  );
}

function PricingTable({plan_name,price,features,features_unavailable}) {
  const styles={color: plan_name==="FREE"?"rgb(163, 158, 158)":"black"};
  

  
  
  return(
    <div className="pricing_table">
         <p className="plan_name">{plan_name}</p>
         <p className="price">${price}<span> /month</span></p>
         <div className="features">
        
          <ul className="list">
          <li><FaCheck class="icon" />{features[0]}</li>
          <li><FaCheck class="icon" />{features[1]}</li>
          <li><FaCheck class="icon" />{features[2]}</li>
          <li><FaCheck class="icon" />{features[3]}</li>
          <li style={styles}><FaCheck class="icon" />{features_unavailable[0]}{features[4]}</li>
          <li style={styles}><FaCheck class="icon" />{features_unavailable[1]}{features[5]}</li>
          <li style={styles}><FaCheck class="icon" />{features_unavailable[2]}{features[6]}</li>
          <li style={styles}><FaCheck class="icon" />{features_unavailable[3]}{features[7]}</li>
          </ul>
         <button>Button</button>
         </div>
         </div> 
          
        
  );
}


export default App;
