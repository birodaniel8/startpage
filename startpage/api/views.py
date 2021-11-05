from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import feedparser

# Create your views here.
class GetNewsView(APIView):
    def get(self, request, format=None):
        feeds = ['https://telex.hu/rss', 'https://444.hu/feed', 'https://24.hu/feed/', 'https://hvg.hu/rss']
        icons = {
            "telex": "http://telex.hu/favicon.ico",
            # "telex": "telex.hu/_nuxt/icons/icon_64x64.b45998.png",
            # "444": "http://444.hu/assets/blog/static/444-touch-60x60-9e787b1cc6bb60204e7419276bc82d59.png",
            "444": "http://444.hu/assets/blog/static/favicon.ico",
            "24": "http://24.p3k.hu/apple-touch-icon.png",
            "hvg": "http://hvg.hu/Content/redesign/i/favicon.ico",
        }
        data = {"news_list": []}
        for feed in feeds:
            NewsFeed = feedparser.parse(feed)

            for entry in NewsFeed.entries:
                site = NewsFeed.href.split("/")[2].split(".")[0]
                entry_data = {
                    "site": site,
                    "title": entry.title,
                    "published": entry.published,
                    "published_at": entry.published.split(" ")[4][:5],
                    "url": entry.link,
                    "icon": icons[site],
                }
                data["news_list"].append(entry_data)
        return JsonResponse(data, status=status.HTTP_200_OK)