from rest_framework import routers
from .api import CityViewSet
from django.urls import path
from .views import GetNewsView

router = routers.DefaultRouter()
router.register('api/city', CityViewSet, 'city')

urlpatterns = router.urls + [
    path("api/get-news", GetNewsView.as_view()),
]