package com.example.ficha8

import android.content.Context
import android.util.Log
import android.widget.Toast
import com.android.volley.AuthFailureError
import com.android.volley.Header
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.HurlStack
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import okhttp3.Headers
import org.json.JSONObject
import pi4.main.Utils.BackendURL
import java.nio.charset.Charset
import kotlin.math.log


object Req {
    fun AddToQueue(request:JsonObjectRequest, context: Context) {
        val queue = Volley.newRequestQueue(context)
        queue.add(request)
    }

    fun queryParamsToString(queryParams: JSONObject):String {
        // excusa de fazer o for se estiver vazio
        if (queryParams.length() == 0) {
            return ""
        }

        var returnString:String = "?"
        for (i in 0 until queryParams.names()!!.length()) {
            if (i != 0) {
                returnString += "&"
            }

            returnString +=
                java.net.URLEncoder.encode(
                    queryParams.names()?.getString(i).toString(),
                    "UTF-8") + "=" +
                java.net.URLEncoder.encode(
                    queryParams.get(queryParams.names()!!.getString(i)).toString(),
                    "UTF-8"
                )
        }

        return returnString;
    }

    fun GET(
        path:String,
        queryParams: JSONObject,
        context: Context,
        token: String,
        then: (res:JSONObject) -> Unit
    ) {
        val queue = Volley.newRequestQueue(context)

        val url = BackendURL + path + queryParamsToString(queryParams)
        Log.i("Request GET", url)

        val request = object : JsonObjectRequest(
            Request.Method.GET,
            url,
            null,
            { res ->
                Log.i("Request GET\n", res.toString(2))
                then(res)
            },
            { error ->
                if(error.networkResponse.statusCode == 404)
                    Toast.makeText(context, "Não foi encontrado informação", Toast.LENGTH_SHORT).show()
                Log.i("${error.networkResponse.statusCode}", "${error.networkResponse}")
            }
        ) {
            override fun getHeaders(): MutableMap<String, String> {
                val headers = HashMap<String, String>()

                if(token.isNotEmpty())
                    headers["Authorization"] = "Bearer $token"

                return headers
            }
        }

        Log.i("header", request.headers.toString())

        queue.add(request)
    }


    fun POST(
        path: String,
        queryParams: JSONObject,
        requestBody:JSONObject,
        context: Context,
        token: String,
        then: (res:JSONObject) -> Unit
    ) {
        Log.i("path", path)
        Log.i("request body\n", requestBody.toString(2))

        val request = object : JsonObjectRequest(
            Request.Method.POST,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("POST","ENTRAMOS")
                then(res)
            },
            { error ->
                if(error.networkResponse.statusCode == 404)
                    Toast.makeText(context, "Utilizador não foi encontrado", Toast.LENGTH_SHORT).show()
                if(error.networkResponse.statusCode == 401)
                    Toast.makeText(context, "Sem autorização", Toast.LENGTH_SHORT).show()
                if(error.networkResponse.statusCode == 400)
                    Toast.makeText(context, "Input introduzido invalido", Toast.LENGTH_SHORT).show()

                Log.i("{${error.networkResponse.statusCode}}","{${error.networkResponse}}")
            }
        ) {
            override fun getHeaders(): MutableMap<String, String> {
                val headers = HashMap<String, String>()

                if(token.isNotEmpty())
                    headers["Authorization"] = "Bearer $token"

                return headers
            }
        }

        AddToQueue(request, context)
    }

    fun PUT(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, token: String, then: (response:JSONObject) -> Unit) {
        val request = object : JsonObjectRequest(
            Request.Method.PUT,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("Request PUT\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace()}
        ) {
            override fun getHeaders(): MutableMap<String, String> {
                val headers = HashMap<String, String>()

                if(token.isNotEmpty())
                    headers["Authorization"] = "Bearer $token"

                return headers
            }
        }

        AddToQueue(request, context)
    }

    fun PATCH(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, token: String, then: (response:JSONObject) -> Unit) {
        val request = object : JsonObjectRequest(
            Request.Method.PATCH,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("Request PATCH\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace()}
        ) {
            override fun getHeaders(): MutableMap<String, String> {
                val headers = HashMap<String, String>()

                if(token.isNotEmpty())
                    headers["Authorization"] = "Bearer $token"

                return headers
            }
        }

        AddToQueue(request, context)
    }

    fun DELETE(path: String, queryParams: JSONObject, requestBody:JSONObject, context: Context, token: String, then: (response:JSONObject) -> Unit) {
        val request = object : JsonObjectRequest(
            Request.Method.DELETE,
            BackendURL + path + queryParamsToString(queryParams),
            requestBody,
            { res ->
                Log.i("Request DELETE\n", res.toString(2))
                then(res)
            },
            { error -> error.printStackTrace()}
        ) {
            override fun getHeaders(): MutableMap<String, String> {
                val headers = HashMap<String, String>()

                if(token.isNotEmpty())
                    headers["Authorization"] = "Bearer $token"

                return headers
            }
        }

        AddToQueue(request, context)
    }
}