import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import RecipeList from './RecipeList'
import Recipe from './Recipe'
import Category from './Category'
import Layout from './utils/Layout'

export default function App() {
  const [dataSet, setDataSet] = useState()
  // const navigate = useNavigate()

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route
            path={'/recipe/:link'}
            element={<Recipe dataset={dataSet} />}
          />
          <Route
            path={'/category/:link'}
            element={<Category dataset={dataSet} />}
          />
          <Route path="/" element={<RecipeList data={setDataSet} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
