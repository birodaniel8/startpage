from rest_framework import routers
from .api import CityViewSet

router = routers.DefaultRouter()
router.register('api/city', CityViewSet, 'city')

urlpatterns = router.urls