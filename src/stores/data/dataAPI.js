import URLS from '../../constants/urls'
import { GET } from '../../utilities/HttpUtility'

const dataAPI = {
  getList: () => GET(URLS.getList, { perPage: 25 }),
}

export default dataAPI;