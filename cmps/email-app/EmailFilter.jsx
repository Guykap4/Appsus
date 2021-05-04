export class EmailFilter extends React.Component {
    state = {
        search: null,
    }

    render() {
        return (
            <div className="search-email">
                <label htmlFor="text"><img src="./assets/img/search-icon.png" /></label>
                <input type="text" name="text" id="text" placeholder="search mail" />
            </div>
        )
    }
}