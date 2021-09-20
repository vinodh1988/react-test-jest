import { render, screen } from '@testing-library/react';
import App from './App';

describe("Testing the components",()=>{

    test("App Component rendered Correctly",()=>{
        render(<App title="First React App" />);

        let element = screen.getByText(/First React App/i);
                        
        
        expect(element).toBeInTheDocument();

        render(<App title="India"/>)
         element = screen.getByText(/India/i);
                        
        
        expect(element).toBeInTheDocument();


    })

    test("style must be applied",()=>{
        render(<App title="First React APP"/>)
        let element = screen.getByText(/First React App/i);
        expect(element).toHaveStyle({backgroundColor: "yellow",padding :"50px"})         
    })
})