import React from 'react'
import { ComponetContextProvider } from '../../Contexts/ComponentContext';
import MainContent from "../MainContent/MainContent";


export default function Root() {  
   
  return (
    <ComponetContextProvider>      
      <MainContent />
    </ComponetContextProvider>
  )
}