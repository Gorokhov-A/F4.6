import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTitle, getCategory } from './utils/utils'

export default function Category(props: any) {
  const dataSet = props.dataset
  const { link } = useParams()
  const name = link?.toString()

  const storage = window.localStorage.getItem('dataSet') || ''
  const storedData = JSON.parse(storage)

  const [recipes, setRecipes] = useState(storedData)

  function getStorage() {
    if (storage) setRecipes(storedData)
    else setRecipes(dataSet)
  }

  useEffect(() => {
    return getStorage()
  }, [])

  return (
    <>
      <h1>
        All recipes in category <span className="capitalize">{link}</span>
      </h1>
      <div className="category-listing">
        {recipes.map((data: any) =>
          getCategory(data.category).toLowerCase() === name ? (
            <div className="recipe-card" key={data.id}>
              <h2 className="recipe-title">
                <Link
                  to={'/recipe/' + getTitle(data.title)}
                  className="recipe-link"
                >
                  {data.title.toLowerCase()}
                </Link>
              </h2>
              <h4 className="recipe-subtitle">{getCategory(data.category)}</h4>
              <Link to={'/recipe/' + getTitle(data.title)}>
                <img src={data.img} alt={data.img} />
              </Link>
            </div>
          ) : (
            ''
          )
        )}
      </div>
    </>
  )
}
