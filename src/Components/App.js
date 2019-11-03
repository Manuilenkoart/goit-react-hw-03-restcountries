import React, { Component } from 'react';
import debaunce from 'lodash.debounce';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchApi from '../Components/service/fetchApi';
import Country from './Country';
import Countries from './Countries';
import css from './App.module.css';
class App extends Component {
  state = {
    query: '',
    countries: [],
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchCounrties();
    }
  }
  notifyError = () => toast.error('QUERY NULL! Make query more specific');
  notifyInfo = () => toast.info('Make query more specific');
  notifySuccess = () => toast.success('www');

  fetchCounrties = debaunce(async () => {
    const { query, countries } = this.state;

    if (!query) {
      return;
    }
    try {
      await fetchApi(query).then(countries => {
        this.setState({ countries });
      });
    } catch (error) {
      toast.warning(error);
    }
    if (countries.length < 1 || countries.length > 10) {
      this.notifyInfo();
    }
  }, 500);
  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };
  render() {
    const { query, countries } = this.state;
    return (
      <div className={css.container}>
        <h3>
          Search by country name. It can be the native name or partial name
        </h3>
        <form>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            placeholder="Search country... "
          />
        </form>

        {countries.length <= 10 && <Countries items={countries} />}
        {countries.length === 1 && <Country item={countries[0]} />}

        <ToastContainer />
      </div>
    );
  }
}

export default App;
