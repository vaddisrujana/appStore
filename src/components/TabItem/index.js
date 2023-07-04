import './index.css'

const TabItem = props => {
  const {tabsList, clickTab} = props
  const {displayText, tabId} = tabsList
  const onclick = () => {
    clickTab(tabId)
  }

  return (
    <li className="tab">
      <button type="button" onClick={onclick}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
