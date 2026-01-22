import Card from "../../component/Card/Card";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import Modal from "../../component/Modal/Modal";

export default function Content({ books, edit, onChangeBook, onSubmitAdd, onSubmitEdit, book, onClickCloseModal, onClickCloseEdit, toggleModal, message, onClickEdit }) {

  // *content home (/)*
  // welcome & logo

  // *content books*
  // card
  // modal add/edit
  // floating button 

  // *content reads*
  // card
  // modal edit
  // floating button

  // *content done*
  // card
  // floating button

  // *content reccomend
  // page soon

  return (
    <>

      {books.map((book, index) => (
        <Card
          key={index}
          title={book.Title}
          author={book.Author}
          page={book.Page}
          slug={book.Slug}
          onClickDelete={() => onClickDelete(book.Slug)}
          onClickEdit={() => onClickEdit(book)}
        />
      ))}
     <Modal
        change={onChangeBook}
        dataBook={book}
        message={(message === '') ? '' : message}

        submit={(edit) ? e => onSubmitEdit(e, book.Slug) : onSubmitAdd}
        isEdit={(edit) ? edit : false}
        closeModal={(edit) ? onClickCloseEdit : onClickCloseModal}
      />
      <FloatingActionButton modal={toggleModal}></FloatingActionButton>
    </>
  )
}