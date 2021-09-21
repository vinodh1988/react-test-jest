import { render, screen ,fireEvent,within } from '@testing-library/react';
import App from './App';

describe("Testing the components",()=>{

    var element;

    beforeEach(()=>{
       render(<App title="First React App"/>)
    });

    test("App Component rendered Correctly",()=>{
      
    
        element = screen.getByText(/First React App/i);              
        
        expect(element).toBeInTheDocument();

        element=  render(<App title="India"/>)
         element = screen.getByText(/India/i);
                        
        
        expect(element).toBeInTheDocument();
        


    })

    test("style must be applied",()=>{
   
        element = screen.getByText(/First React App/i);
        expect(element).toHaveStyle({backgroundColor: "yellow",padding :"50px"})         
    })

    test("change Theme Button must Exist",()=>{
      
        element = screen.getByRole('button',{name:/Change Theme/i})
        expect(element).toBeInTheDocument(); 
    })

    test("change Title Button must Exist",()=>{
      
        element = screen.getByRole('button',{name:/Change Title/i})
        expect(element).toBeInTheDocument(); 
    })

    test('title must be changed upon Button event',()=>{
          
        element = screen.getByRole('button',{name:/Change Title/i})
        fireEvent.click(element)  //button would be clicked
        element = screen.getByText(/Title Change Happened/i)
        expect(element).toBeInTheDocument()
    })

    test('color must be change upon Change theme',()=>{
        element = screen.getByRole('button',{name:/Change Theme/i})
        fireEvent.click(element);
        
        element = screen.getByText(/First React App/i);
        expect(element).toHaveStyle({backgroundColor: "blue",padding :"50px"}) 
    })

    test('h1 should have people',()=>{
        element = screen.getByRole('heading');
        expect(element).toHaveTextContent(/People/i)
    })

    test('list should have elements',()=>{
        element = render(<App title="Fresh title"/>)
        const target=element.container.querySelector('#home')

        expect(target.textContent).toContain('Fresh title');
        const {getAllByRole}=within(target)
            const items=getAllByRole("listitem");
        expect(items.length).toBeGreaterThanOrEqual(1);
    })
})