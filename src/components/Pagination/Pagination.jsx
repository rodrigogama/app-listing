import React from 'react';
import PropTypes from 'prop-types';
import {
  PaginationContainer,
  PaginationNumbersContainer,
  PaginationNumberItem,
  PaginationArrowButton
} from './PaginationStyles';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentDidMount() {
    const { items, initialPage } = this.props;

    if (items && items.length) {
      this.setPage(initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    const { items, initialPage } = this.props;

    // reset page if items array has changed
    if (items !== prevProps.items) {
      this.setPage(initialPage);
    }
  }

  async setPage(page) {
    const { items, onChangePage } = this.props;
    const { pager } = this.state;

    if (page < 1 || page > pager.totalPages) return;

    const newPager = this.getPager(page);
    const pageOfItems = items.slice(newPager.startIndex, newPager.endIndex + 1);

    await this.setState({ pager: items.length ? newPager : {} });

    onChangePage(pageOfItems);
  }

  getPager(pageNumber) {
    const { items, pageSize, initialPage } = this.props;
    const totalItems = items.length;
    const currentPage = pageNumber > 0 ? pageNumber : initialPage;

    const totalPages = Math.ceil(totalItems / pageSize);

    // for the sake of simplicity, the start page will always be the initialPage, no matter how many items
    const startPage = initialPage;
    const endPage = totalPages;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(i => startPage + i);

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

  render() {
    const { pager } = this.state;

    if (!pager.pages || pager.pages.length <= 1) return null;

    return (
      <PaginationContainer>
        <PaginationArrowButton
          onClick={() => this.setPage(pager.currentPage - 1)}
          disabled={pager.currentPage === 1}
        >
          ❮
        </PaginationArrowButton>
        <PaginationNumbersContainer>
          {pager.pages.map((page, index) => (
            <PaginationNumberItem
              key={index}
              active={pager.currentPage === page}
              onClick={() => this.setPage(page)}
            >
              {page}
            </PaginationNumberItem>
          ))}
        </PaginationNumbersContainer>
        <PaginationArrowButton
          onClick={() => this.setPage(pager.currentPage + 1)}
          disabled={pager.currentPage === pager.totalPages}
        >
          ❯
        </PaginationArrowButton>
      </PaginationContainer>
    );
  }
}

Pagination.defaultProps = {
  initialPage: 1,
  pageSize: 5,
  items: []
};

Pagination.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number
};

export default Pagination;
