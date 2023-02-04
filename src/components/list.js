//компонент принимает данные и делает из них вертску на странице.
const List = ({data}) => {
    const getOptions = (values1) => {
      const options = values1.map ((item) => {
        const {value, displayValue} = item;      //destructorisation
        return (
          <li value = {value}>
            {displayValue}
          </li>
        )
      });
    return options
    };
  return (
    <ul>
      {getOptions(data)}
    </ul>
  )
  }

  export default List;