# Generated by Django 4.1.3 on 2023-08-16 03:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='metro',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='server.metro'),
        ),
    ]
