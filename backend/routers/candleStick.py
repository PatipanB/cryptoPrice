from fastapi import APIRouter
from binance.client import Client
import datetime
import pandas as pd

router = APIRouter(
    prefix= "/api/candleStick",
    tags=["Binance"],
    responses={404: {"message": "Not Found"}}
)

@router.get('/{symbol}')
async def getCandleStick(symbol: str):
    
    NOW = str(datetime.datetime.now())
    WEEK_AGO = str(datetime.datetime.now() - datetime.timedelta(days=7))
    
    client = Client("", "")
    candles = client.get_historical_klines(symbol, Client.KLINE_INTERVAL_30MINUTE, WEEK_AGO, NOW)
    
    data = []
    columns = ["Time", "Open", "High", "Low", "Close"]
    
    for cs in candles:
        cs[0] = datetime.datetime.fromtimestamp((cs[0]/1000)).strftime('%Y-%m-%d %H:%M:%S') 
        data.append(cs[:5])   

    df = pd.DataFrame(data, columns=columns)
    response = df.to_dict('records')
    
    return response
    