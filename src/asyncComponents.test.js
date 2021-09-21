import { render, screen ,fireEvent,within,waitFor } from '@testing-library/react';
import DataDisplay from './DataDisplay';
import * as mod from './DataStore/Store';

//const testedObject=jest.spyOn(mod,'asyncUserProvider')


describe('Data Async component Test',()=>{
    
    test("Component should load with initial data",()=>{
        render(<DataDisplay/>)
        let result = screen.getAllByRole("heading");
        expect(result.length).toBe(2)
        expect(result[0]).toHaveTextContent("Krishna")
        expect(result[1]).toHaveTextContent("Mumbai")
    })

    test('event should fire and give result',async ()=>{
        render(<DataDisplay/>)
        const testedObject=jest.spyOn(mod,'asyncUserProvider').mockImplementation(()=>{
        
            return new Promise((resolve,reject)=>{
              resolve({name:'Peter',city:'Chennai'})
            });
        })
        let element= screen.getAllByRole('button')
        expect(screen.getByText(/Krishna/i)).toBeInTheDocument();
        fireEvent.click(element[0])
        await waitFor(()=>screen.getByText(/Peter/i))

        expect(screen.getByText(/Peter/i)).toBeInTheDocument();
        expect(screen.getByText(/Peter/i)).toBeInTheDocument();
        expect(testedObject).toBeCalledTimes(1);
    })

    
})
