import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTitle, getCategory } from './utils/utils'

export default function Recipe(props: any) {
  const dataSet = props.dataset
  const storage = window.localStorage.getItem('dataSet') || ''
  const storedData = JSON.parse(storage)

  const [recipes, setRecipes] = useState(storedData)
  const { link } = useParams()
  const title = link?.toString()

  function getStorage() {
    if (storage) setRecipes(storedData)
    else setRecipes(dataSet)
  }

  useEffect(() => {
    return getStorage()
  }, [])

  return (
    <>
      {recipes.map((data: any) =>
        getTitle(data.title).toLowerCase() === title ? (
          <div className="recipe-card" key={data.id}>
            <h2 className="recipe-title">
              Recipe for<span> </span>"
              <span className="sentence">{data.title.toLowerCase()}</span>"
            </h2>

            <h4 className="recipe-subtitle">
              Category: {getCategory(data.category)}
            </h4>

            <img src={data.img} alt={data.img} />
            <div className="instructions">
              <h5 className="recipe-subheading">Ingredients:</h5>
              <p className="recipe-text">{data.ingredients}</p>
              <h5 className="recipe-subheading">Directions:</h5>
              <p className="recipe-text">{data.directions}</p>
            </div>
          </div>
        ) : (
          ''
        )
      )}
    </>
  )
}
