/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import './style.css'

const PaginationComp = ({ numPages, currentPage, contextPage }) => {
  if (numPages <= 1) {
    return null
  }

  return (

    <div id="blog-pagination" className="mt-5">

      <Pagination listClassName="justify-content-center mt-" aria-label="Page navigation">

        {currentPage !== 1
        && (
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink href={`/blog/${contextPage ? `${contextPage}/` : ''}${currentPage > 2 ? `page/${currentPage - 1}` : ''}`}> Previous </PaginationLink>
        </PaginationItem>
        )}
        {Array.from({ length: numPages }).map((item, i) => {
          const index = i + 1

          const baseLink = `/blog/${contextPage ? `${contextPage}/` : ''}`
          const link = index === 1 ? baseLink : `${baseLink}page/${index}`

          return (
            <PaginationItem active={currentPage === index} key={link}>
              {currentPage === index ? (
                <PaginationLink href={link}>
                  {index}
                </PaginationLink>
              ) : (

                <PaginationLink href={link}>
                  {index}
                </PaginationLink>

              )}
            </PaginationItem>
          )
        })}

        {currentPage !== numPages
        && (
        <PaginationItem disabled={currentPage === numPages}>
          <PaginationLink href={`/blog/${contextPage ? `${contextPage}/` : ''}page/${currentPage + 1}`}> Next </PaginationLink>
        </PaginationItem>
        )}
      </Pagination>

    </div>
  )
}

export default PaginationComp
