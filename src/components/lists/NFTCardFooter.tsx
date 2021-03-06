/**
 * @author weixuefeng@diynova.com
 * @time  2021/8/24 4:07 下午
 * @description:
 * @copyright (c) 2021 Newton Foundation. All rights reserved.
 */

import { formatEther } from '@ethersproject/units'
import React from 'react'
import { useTranslation } from 'react-i18next'
import NumberFormat from 'react-number-format'
import { cSymbol } from '../../constant'
import { NFTokenSaleType } from '../../entities'
import { useQuery } from '@apollo/client'

function NftCardFooterAuction(props) {
  const { item } = props
  let { t } = useTranslation()
  const deadLine: number = item.orders[0].deadline
  const end = Date.now() / 1000 > deadLine
  let auctionWords = end ? t('auction ended') : t('in auction')
  return (
    <div className="footer auction">
      <div className="flex">
        <div className="tl">{auctionWords}</div>
        <div className="tr">
          <em>{t('s1 bids', { s1: item.askOrder.numBids })}</em>
          {t('last bid')}
        </div>
      </div>
      <div className="flex">
        {/*<div className='bl' title={DateTime(auction.endTime * 1000)}>*/}
        {/*  {CountdownLocale(auction.endTime, t('time locale'))}*/}
        {/*</div>*/}
        <div className="br price">
          <NumberFormat
            thousandSeparator={true}
            displayType={'text'}
            decimalScale={0}
            fixedDecimalScale={true}
            value={formatEther(item.price)}
          />{' '}
          {cSymbol()}
        </div>
      </div>
    </div>
  )
}

const NftCardFooter = props => {
  let { t } = useTranslation()
  const { item } = props
  if (item.strategyType === NFTokenSaleType.DIRECT_SALE && item.forSale === true) {
    return (
      <div className="footer sale">
        <div className="flex">
          <div className="tl">{t('for sale')}</div>
          <div className="tr">
            <em>{t('s1 buys', { s1: item.numSales })}</em>
            {t('price')}
          </div>
        </div>
        <div className="flex">
          <div className="bl"></div>
          <div className="br price">
            <NumberFormat
              thousandSeparator={true}
              displayType={'text'}
              decimalScale={0}
              fixedDecimalScale={true}
              value={formatEther(item.price)}
            />{' '}
            {cSymbol()}
          </div>
        </div>
      </div>
    )
  } else if (item.strategyType === NFTokenSaleType.NOT_SALE && item.forSale === false) {
    return (
      <div className="footer off">
        <div className="flex">
          <div className="tl">{t('not for sale')}</div>
          <div className="tr">
            <em>{t('s1 buys', { s1: item.numSales })}</em>
            {t('last price')}
          </div>
        </div>
        <div className="flex">
          <div className="bl" />
          <div className="br price">
            <NumberFormat
              thousandSeparator={true}
              displayType={'text'}
              decimalScale={0}
              fixedDecimalScale={true}
              value={formatEther(item.price)}
            />{' '}
            {cSymbol()}
          </div>
        </div>
      </div>
    )
  } else if (item.strategyType === NFTokenSaleType.ENGLAND_AUCTION) {
    return <NftCardFooterAuction {...props} />
  } else {
    return (
      <div className="footer off">
        <div className="flex">
          <div className="tl">{t('not for sale')}</div>
          <div className="tr">
            <em>{t('s1 buys', { s1: item.numSales })}</em>
            {t('last price')}
          </div>
        </div>
        <div className="flex">
          <div className="bl" />
          <div className="br price">-</div>
        </div>
      </div>
    )
  }
}

export default NftCardFooter
