import actions      from './actions'
import mutations    from './mutations'
import * as getters from './getters'
import * as types   from './types'

const state = {
    billList: [],
    buildingFee: {              // 房屋租赁费
        money: 1024
    },
    propertyFee: {              // 物业管理费
        money: 1024
    },
    electricityBill: {          // 电费
        money: 1024
    },
    waterFee: {                 // 水费
        money: 1024
    },
    leaseDeposit: {             // 租赁保证金
        money: 1024
    },
    energyDeposit: {            // 能源管理费
        money: 1024
    },
    decorationDeposit: {        // 装修保证金
        money: 1024
    },
    pmInfo: [],
    sumPm: '',
    pmInfoH: [],
    rentInfo: [],
    rentInfoH: [],
    sumRent: '',
    feeInfo: [],
    sumEle: '',
    eleInfo: [],
    eleInfoH: [],
    sumWater: '',
    clientNum: '1',
    waterInfo: [],
    waterInfoH: []
}

export default {
    state,
    types,
    actions,
    mutations,
    getters
}
