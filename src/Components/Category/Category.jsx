
import React from 'react';
import { categoryImage  } from './categoryFullInfos';
import CategoryCard from './CategoryCard';
import classes from './category.module.css'
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryImage.map((infos) => {
        return <CategoryCard data={infos} />;
      })}
    </section>
  );
}
export default Category;