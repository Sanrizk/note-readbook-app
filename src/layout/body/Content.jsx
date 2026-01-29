import Card from "../../component/Card/Card";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import Modal from "../../component/Modal/Modal";

export default function Content({ books, edit, onChangeBook, onSubmitAdd, onSubmitEdit, onClickDelete, book, onClickCloseModal, onClickCloseEdit, toggleModal, message, onClickEdit, checked, changeChecked, changeRadio, radio }) {

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

  console.log(books)

  return (
    <>

      {books.map((book, index) => (
        <Card
          key={index}
          index={index}
          title={book.Title}
          author={book.Author}
          page={book.Page}
          pageRomawi={book.PageRomawi}
          readingNumber={book.ReadingNumber}
          status={book.Status}
          slug={book.Slug}
          onClickDelete={() => onClickDelete(book.Slug)}
          onClickEdit={() => onClickEdit(book)}
          isRead={book.Status.IsRead}
          checked={checked}
          changeChecked={changeChecked}
        />
      ))}
      <Modal
        change={onChangeBook}
        dataBook={book}
        message={(message === '') ? '' : message}

        submit={(edit) ? e => onSubmitEdit(e, book.Slug) : onSubmitAdd}
        isEdit={(edit) ? edit : false}
        closeModal={(edit) ? onClickCloseEdit : onClickCloseModal}
        
        changeRadio={changeRadio}
        onSubmitEdit={onSubmitEdit}
        radio={radio}
      />
      <FloatingActionButton modal={toggleModal}></FloatingActionButton>
    </>
  )
}