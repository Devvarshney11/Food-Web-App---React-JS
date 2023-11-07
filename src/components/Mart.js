import { useState } from "react";

const Section = ({ Title, isVisible, setIsVisible }) => {
  return (
    <div className="m-10 p-10 border-black border box-border">
      <h3 className="font-bold">{Title}</h3>
      {isVisible ? (
        <>
          <button className="pointer underline" onClick={() => setIsVisible("")}>
            Hide
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </>
      ) : (
        <button className="pointer underline" onClick={() => setIsVisible(Title.toLowerCase())}>
          Show
        </button>
      )}
    </div>
  );
};
const Mart = () => {
   const [sectionConfig, setSectionConfig] = useState("");
  return (
    <>
      <Section
        Title="About"
        isVisible = {sectionConfig === "about"}
        setIsVisible={(val) =>
          setSectionConfig(val)
        }
      />
      <Section
        Title="Contact"
        isVisible={sectionConfig === "contact"}
        setIsVisible={(val) =>
          setSectionConfig(val)
        }
      />
      <Section
        Title="Carrers"
        isVisible={sectionConfig === "carrers"}
        setIsVisible={(val) =>
          setSectionConfig(val)
        }
      />
      <Section
        Title="Products"
        isVisible={sectionConfig === "products"}
        setIsVisible={(val) =>
          setSectionConfig(val)
        }
      />
    </>
  );
};
export default Mart;
