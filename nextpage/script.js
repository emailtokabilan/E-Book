document.addEventListener('DOMContentLoaded', () => {

	const getSearchBar =
		document.querySelector('#searchBar');
	const getAllBooks =
		document.querySelectorAll('.book-poster');

	getSearchBar.addEventListener('keyup', e => {
		getAllBooks.forEach(book => {
			if (book.innerText.toLowerCase().includes(
				e.target.value.toLowerCase())) {
				book.style.display = 'block';
				return book;
			}
			else {
				book.style.display = 'none';
			}
		});
	});
});

function scrollToTop() {
	window.scrollTo(0, 0);
}
