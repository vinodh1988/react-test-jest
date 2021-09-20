import { render, screen } from '@testing-library/react';
import App from './App';
import { AppData, contextProcess, inputProcess } from './DataStore/Store';


describe('General test Cases',()=>{

 

  test('title should be correct',()=>{
    expect(AppData.appname).toBe("First React App");
  })

  test("Number of Programmers should be 4",()=>{
    expect(AppData.people.length).toEqual(4);
  })

  test("Testing functions without return values",()=>{
    expect(AppData.context).toBe("nothing yet")
    contextProcess("India")
    expect(AppData.context).toBe("India Processed")
  });

  test("Testing Exceptions",()=>{
      result=inputProcess(40);  
      expect(result).toThrow(error)
  });
})