import React from "react";
import PageSection from "./PageSections";
import { productData } from "../utils/productData";

const Products = () => {
  return (
    <PageSection
      name="products"
      title="Products"
      subtitle={`Plainly lamplight whether evermore thereat tell, we or scarce bird spoken he whether on, sinking thy again sent what eyes tinkled his explore these. Within melancholy sad bird not respiterespite..`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {productData.map(({ id, icon, title, subtitle }) => (
          <div key={id}  className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center">
            
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Products;
