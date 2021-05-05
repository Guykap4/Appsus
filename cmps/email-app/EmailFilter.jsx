export class EmailFilter extends React.Component {
    state = {
        search: null,
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ ...this.state.search, [field]: val }, () => {
            this.props.onSetFilter(this.state.search)
        })
    }

    render() {
        return (
            <div className="search-email">
                <label htmlFor="text"><img src="./assets/img/search-icon.png" /></label>
                <input type="text" name="search" id="search" placeholder="search mail" onChange={this.handleChange} />
            </div>
        )
    }
}