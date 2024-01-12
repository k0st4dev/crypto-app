import { Typography, Card } from "antd";

export function ExchangeRateUI(props) {
  const { price, dataObj, currencySymbol } = props;
  const toCurrency = dataObj.toCurrency;
  let value = Number(price);
  let currencyCode = toCurrency;

  let currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });

  let formattedCurrency = currency.format(value);

  return (
    <div className="excange-rate-ui">
      <Card
        style={{
          width: 500,
          backgroundColor: "#4d4add",
          color: "#fff",
          fontWeight: "900",
        }}
        extra={currencySymbol}
        bordered={false}
        size="default"
      >
        <Typography.Paragraph style={{ color: "#fff", fontWeight: "600" }}>
          {formattedCurrency}
        </Typography.Paragraph>
      </Card>
    </div>
  );
}
