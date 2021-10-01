import React, { Component } from 'react';
import fetchDataApi from './Components/services/api-service';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';
import Loader from './Components/Loader/Loader';
import Button from './Components/Button/Button';

class App extends Component {
  state = {
    gallery: [],
    search: '',
    page: 1,
    showModal: false,
    showLoader: false,
    error: null,
    largeImage: {},
    total: 0,
  };

  fetchGallery = () => {
    const { searchQuery, page } = this.state;
    this.setState({ showLoader: true });

    fetchDataApi(searchQuery, page)
      .then(({ hits, total }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
          total,
        }));
        this.scrollToDown();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ showLoader: false }));
  };

  scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleFormSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.setState({ searchQuery, gallery: [], page: 1 });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleOpenPicture = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  showLoadMore = () => {
    const { total, page } = this.state;
    return Math.ceil(total / 12) !== page - 1;
  };
  componentDidMount() {
    this.setState({ showLoader: true });
    this.fetchGallery();
  }

  componentDidUpdate(prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchGallery();
    }
  }
  render() {
    const { error, showLoader, showModal, gallery, largeImage } = this.state;
    const showLoadMore = this.showLoadMore();
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {error && <p>{error.message}</p>}

        {gallery.length > 0 && <ImageGallery gallery={gallery} openImg={this.handleOpenPicture} />}

        {showLoader && <Loader />}

        {gallery.length > 0 && !showLoader && showLoadMore && (
          <Button onLoadMore={this.fetchGallery} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage.largeImageURL} alt={largeImage.tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
