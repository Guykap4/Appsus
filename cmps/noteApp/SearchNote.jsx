export class SearchNote extends React.Component {
    state = {
        searchNote: '',
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.value;
        this.setState({ ...this.state, [field]: val }
        )

        this.props.onSearch(val)
    }



    render() {
        return (
            <form className="note-search">
                <label htmlFor="searchNote"><img src="./assets/img/search-icon.png" /></label>
                <input type="search" name="searchNote" id="vasearchNotel" value={this.state.val} onChange={this.handleChange} />
            </form>
        )
    }
}