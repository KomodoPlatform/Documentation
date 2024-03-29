
## get\_gossip\_peer\_topics

**get_gossip_peer_topics**

The `get_gossip_peer_topics` method returns a map of peerIDs to an array of the topics to which they are subscribed.

#### Arguments

| Structure | Type | Description |
| --------- | ---- | ----------- |
| (none)    |      |             |

#### Response

| Structure                           | Type | Description |
| ----------------------------------- | ---- | ----------- |
| PeerID-Topic map | Array     | Topics subscribed to by PeerIDs  |


#### :pushpin: Examples


#### Command

```bash
curl --url "http://127.0.0.1:7783" --data "
	{
        \"userpass\": \"${userpass}\",
        \"method\": \"get_gossip_peer_topics\"
    }
"
```

<div style="margin-top: 0.5rem;">

<collapse-text hidden title="Response">

#### Response (success)

```json
{
  "result":{
  	"12D3KooWJDoV9vJdy6PnzwVETZ3fWGMhV41VhSbocR1h2geFqq9Y":[],
  	"12D3KooWM8BrDBXc1TVw2vswoqYcQVn7fFvpAvcCfaV2Uqg2L9jU":[],
  	"12D3KooWPR2RoPi19vQtLugjCdvVmCcGLP2iXAzbDfP3tp81ZL4d":[],
  	"12D3KooWDbBdifGp3viDR4dCECEFKepjhwhd2YwAqgNVdXpEeewu":[]
  }
}
```

</collapse-text>

</div>
