import { render, screen } from '@testing-library/react';
import App from './App';
import { AppData } from './DataStore/Store';

describe('General test Cases',()=>{

  test('title should be correct',()=>{
    expect(AppData.appname).toBe("First React App");
  })

  test("Number of Programmers should be 4",()=>{
    expect(AppData.people.length).toEqual(4);
  })
})